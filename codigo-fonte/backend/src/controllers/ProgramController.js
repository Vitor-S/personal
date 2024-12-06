const User = require("../models/User");
const uuid = require("uuid")

// controller validada
const programController = {

  /**
   *  Exemplo de body: {
          "user_id": "67202e33bf5fb96f51165d3a",
          "program": {
              "name": "Programa 1",
              "workouts": []
          }
      }


      OK
   * @param {*} req 
   * @param {*} res 
   */
  create: async(req, res)=>  {
    try {
      let program = req.body.program //isso será um objeto
        , user_id = req.body.user_id
      ;

      const program_obj = {
          name: program.name,
          workouts: program.workouts || [],
      };

      const updated = await User.findByIdAndUpdate(user_id, {
          $push: { programs: program_obj },
      }, { new: true });
      let new_program = updated.programs.at(-1)
      res.status(201).json(new_program);

    } catch (error) {
        console.log(error);
    }
  },

  /**
   * exemplo: {
        "program_id": "6b0eba5f-c23e-4a6b-9b55-3e2fe810c485",
        "user_id": "67202e33bf5fb96f51165d3a"
    }

      OK
   * @param {*} req 
   * @param {*} res 
   */
  delete: async (req, res) => {
    try {
      let program = {
        _id: req.body.program_id
      } 
        , user_id = req.body.user_id
      ;

      const updated = await User.findByIdAndUpdate(user_id, {
          $pull: { programs: program },
      }, { new: true });

      res.status(201).json({ message: "Programa deletado" });

    } catch (error) {
        console.log(error);
    }
  },


  /**
   * {
        "name": "Programa 1" ,
        "program_id": "a5a4751c-387c-4656-be04-0b7c2dc5076f",
        "user_id": "67202e33bf5fb96f51165d3a"
    }

    OK
   * @param {*} req 
   * @param {*} res 
   */
  update: async (req, res) => {
    try {
      let name = req.body.name
        , user_id = req.body.user_id
      ;

      const updated = await User.findByIdAndUpdate(user_id,
        {
          $set: {
              "programs.$[program].name": name // Atualiza o programa correspondente
          }
        },
        {
            new: true, // Retorna o documento atualizado
            arrayFilters: [{ "program._id": req.body.program_id }] // Filtra o programa a ser atualizado
        }
      )

      res.status(201).json({ message: "Programa editado" });

    } catch (error) {
        console.log(error);
    }
  },


getProgram: async (req, res) => {
  try {
    const { user_id, program_id } = req.params;

    // Busca o usuário e filtra pelo programa com o ID fornecido
    const user = await User.findById(user_id, {
      programs: { $elemMatch: { id: program_id } }
    }).populate({
      path: "programs.workouts.exercises",
      model: "Exercise",
    });

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    if (!user.programs || user.programs.length === 0) {
      return res.status(404).json({ message: "Programa não encontrado" });
    }

    res.status(200).json({ program: user.programs[0] });
  } catch (error) {
    console.error("Erro ao buscar o programa:", error);
    res.status(500).json({ message: "Erro ao buscar o programa", error });
  }
}

};

 

module.exports = programController;

// console.log('params: ' + JSON.stringify(req.params))
// console.log('body: ' + JSON.stringify(req.body))
// throw new Error()
