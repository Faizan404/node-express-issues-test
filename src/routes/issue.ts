import { Router } from 'express';

import { IssueService } from '../services/issue';

const router = Router();
const issueService = new IssueService();

// Routes will be added here
// Example route structure:
/*
router.get('/', async (req, res) => {
    // Implementation
});
*/

export default router;