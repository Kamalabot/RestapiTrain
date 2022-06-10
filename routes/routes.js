import express from 'express';

import { ToMongo } from '../models/model.js';

const router = express.Router()

export default router
/*
router.post('/post',(req,res) =>{
    res.send('Post API')
})
*/
router.get('/post',async (req,res)=>{
    const data = new ToMongo({
        Questions:req.body.Questions,
        Answers:req.body.Answers,
        Questions_formed: req.body.Questions_formed,
        Answers_formed: req.body.Answers_formed
    })
    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/getAll',async (req, res)=>{
    try{
        const data = await ToMongo.find();
        res.json(data)
    } catch(error){
        res.status(400).json({message: error.message})
    }
})

router.get('/getOne/:id',async(req, res)=>{
    try{
        const data = await ToMongo.findById(req.params.id);
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

router.patch('/update/:id',async(req, res)=>{
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const options = {new:true};

        const result = await ToMongo.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    } catch (error){
        res.status(400).json({message: error.message})
    }
})

router.delete('/delete/:id',(req,res)=>{
    res.send('Delete by ID API')
})