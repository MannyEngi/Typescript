import Todo from "../models/Todo";
import { Request, Response } from 'express';


export const getAllTodos = async(req: Request, res: Response): Promise<void> => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
};