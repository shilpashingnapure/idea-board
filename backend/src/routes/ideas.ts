import { Router } from "express";
import { AppDataSource } from "../data-source";
import { Idea } from "../entities/Idea";

const router = Router();

const ideaRepository = AppDataSource.getRepository(Idea);

router.get("/", async (req, res) => {
    try {
        const ideas = await ideaRepository.find({
            order: {
                createdAt: "DESC"
            }
        });
        res.json(ideas);
    } catch (error) {
        res.status(500).json({ message: "Error fetching ideas" });
    }
});

router.post("/", async (req, res) => {
    try {
        const { text } = req.body;
        if (!text) {
            return res.status(400).json({ message: "Idea are required" });
        }
        const newIdea = ideaRepository.create({ text });
        await ideaRepository.save(newIdea);
        res.status(201).json(newIdea);
    } catch (error) {
        res.status(500).json({ message: "Error creating idea" });
    }
});


router.patch("/:id/upvote", async (req, res) => {
    try {
        const { id } = req.params;
        const ideaID = Number(id);
        const idea = await ideaRepository.findOne({ where: { id : ideaID } });
        if (!idea) {
            return res.status(404).json({ message: "Idea not found" });
        }       
        
        idea.upvotes = (idea.upvotes || 0) + 1;
        await ideaRepository.save(idea);
        res.json(idea);
    } catch (error) {
        res.status(500).json({ message: "Error updating idea" });
    }
});


export default router;