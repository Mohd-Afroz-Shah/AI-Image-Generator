import express from 'express';
import * as dotenv from 'dotenv';
import {Configuration, OpenAIApi} from 'openai';

import Post from '../mongodb/models/post.js'

dotenv.config()

const router = express.Router();

const configuration = new Configuration({
    apiKey:process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration);
router.route('/').get((req, res)=>{
    res.send('Server side using Dall-E Api');
})

router.route('/').post(async (req, res)=>{
    try {
        const {prompt} = req.body;
        const aiResponse = await openai.createImage({
            prompt,
            n:1,
            size:'1024x1024',
            response_format: 'b64_json'
        })
        const image = aiResponse.data.data[0].b64_json;
        // const image = "https://static.billboard.com/files/2020/04/johnny-depp-feb-2020-billboard-1548-1587132344-compressed.jpg";
        res.status(200).json({photo:image});
    } catch (error) {
        console.log("dalle");
        res.status(500).send(error?.response.data.error.message);
    }
})
export default router;