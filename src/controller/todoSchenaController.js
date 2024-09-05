const todoSchema = require("../schema/todoSchema");


exports.InsertData = async(request, response) =>{

        const tempdata = new todoSchema(request.body)
        try {
                const output = await tempdata.save();
                response.status(201).json({msg:`successfully Inserted ${output}`})
        } catch (error) {
            response.status(500).json({msg:"something went wrong"})
        }
}

exports.DeleteData = async (request, response) =>{

    const DeleteId = request.params.id
    try {
        
        const output = await todoSchema.deleteOne({_id:DeleteId})
        if (output.acknowledged) {
            if (output.deletedCount === 1) {
                return response.status(200).json({ msg: "Todo item deleted successfully." });
            } else {
                return response.status(404).json({ msg: "Todo item not found." });
            }
        } else {
            return response.status(500).json({ msg: "Deletion not acknowledged by the server." });
        }
    } catch (error) {
        response.status(500).json({msg:`deleted UnSuccessfully ${error}`})
    }
};

exports.UpdateData = async(request, response) =>{
    
    const {id} = request.params;
    const updatedData = request.body;

    try {
        const output = await todoSchema.updateOne({_id:id}, {$set:updatedData});

        if (output.matchedCount === 1) {
            response.status(200).json({ msg: "Document successfully updated" });
        } else {
            response.status(404).json({ msg: "No document found with the specified ID" });
        }
        
    } catch (error) {
        response.status(500).json({ msg: "Something went wrong", error: error.message });
    }
};

exports.FetchAll = async(request, response) =>{
    try{

        const output = await todoSchema.find({});
        console.log(output)
        response.status(201).json({msg:"Successfully fetched.",data:output})

    }catch(error){
        response.status(500).json({msg:'something went wrong',error:error.message})
    }
};