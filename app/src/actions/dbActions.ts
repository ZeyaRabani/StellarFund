/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use server"

import { db } from '@/db/db'
import { projects } from '@/db/schema'
import crypto from 'crypto'

interface NewProject {
    userId: string
    title: string
    description: string
    fundingGoal: any
    totalTokens: number
}

export const newProject = async ({ userId, title, description, fundingGoal, totalTokens }: NewProject) => {
    try {
        const uuid = crypto.randomBytes(16).toString('hex');
        const generateNewProjectId = uuid.substring(0, 8) + uuid.substring(9, 13) + uuid.substring(14, 18) + uuid.substring(19, 23) + uuid.substring(24);
        const newProjectId = 'project_' + generateNewProjectId;

        await db.insert(projects).values({
            projectId: newProjectId,
            userId: userId,
            title: title,
            description: description,
            fundingGoal: fundingGoal,
            tokenSymbol: 'XLM',
            totalTokens: totalTokens,
            status: 'active',
            createdAt: new Date().toISOString()
        });

        return 'Project added successfully'
    } catch (error) {
        return 'Error adding project';
    }
};