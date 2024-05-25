const express= require('express')
const router=express.Router();


let voitures = [
    { id: 1, name: "clio" },
    { id: 2, name: "megane" },
    { id: 3, name: "range" }
];

// CREATE: Ajouter une nouvelle voiture
router.post('/addvoitur', (req, res) => {
    const nouvelleVoiture = req.body;
    
    if (!nouvelleVoiture || !nouvelleVoiture.name) {
        return res.status(400).send('Nom de la voiture requis');
    }

    const newId = voitures.length ? voitures[voitures.length - 1].id + 1 : 1;
    nouvelleVoiture.id = newId;
    voitures.push(nouvelleVoiture);

    res.status(201).send(nouvelleVoiture);
});

// READ: Obtenir toutes les voitures
router.get('/listeVoitur', (req, res) => {
    res.send(voitures);
});

// READ: Obtenir une voiture par ID
router.get('/voitures/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const voiture = voitures.find(v => v.id === id);
    
    if (!voiture) {
        return res.status(404).send('Voiture non trouvée');
    }

    res.send(voiture);
});

// UPDATE: Mettre à jour une voiture par ID
router.put('/voitures/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const voiture = voitures.find(v => v.id === id);
    
    if (!voiture) {
        return res.status(404).send('Voiture non trouvée');
    }

    const updatedVoiture = req.body;
    
    if (!updatedVoiture || !updatedVoiture.name) {
        return res.status(400).send('Nom de la voiture requis');
    }

    voiture.name = updatedVoiture.name;
    res.send(voiture);
});

// DELETE: Supprimer une voiture par ID
router.delete('/voitures/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = voitures.findIndex(v => v.id === id);
    
    if (index === -1) {
        return res.status(404).send('Voiture non trouvée');
    }

    const deletedVoiture = voitures.splice(index, 1);
    res.send(deletedVoiture);
});


//router.get('/register',(req,res)=>{
   // res.send({message:'hello to register'})})

//router.get('/login',(req,res)=>{
    //res.send({message:'hello login'})})

    module.exports=router