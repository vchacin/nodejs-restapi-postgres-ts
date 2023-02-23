import { Request, Response } from "express";

import { pool } from "../database";
import { QueryResult } from "pg";

export const getUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM user_info');
        return res.status(200).json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server Error');
    }
};

export const getUserById = async (req: Request, res: Response): Promise<Response>  => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await pool.query('SELECT * FROM user_info WHERE id = $1', [id]);
    return res.json(response.rows);
};

export const createUser = async (req: Request, res: Response): Promise<Response>  => {
    const {name, email} = req.body;
};

// export const updateUser = async (req: Request, res: Response): Promise<Response>  => {
//     try {
        
//     }
//     catch (error) {
        
//     }
// };

// export const deleteUser = async (req: Request, res: Response): Promise<Response>  => {
//     try {
        
//     }
//     catch (error) {
        
//     }
// };