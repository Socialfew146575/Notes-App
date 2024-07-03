
    const mongoose=require('mongoose')

    mongoose.set('strictQuery',false)


    const connectDB=async(url)=>{

        try {

            const connection=await mongoose.connect(url);

            console.log(`Database Connected: ${connection.connection.host}`);



        } catch (error) {

            console.log(error);
            
        }



    }

    module.exports=connectDB