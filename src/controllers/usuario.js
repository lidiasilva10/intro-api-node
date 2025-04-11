const db = require('../dataBase/connection');

module.exports ={
    async listarUsuarios(request, response){
        try {

            const sql= 'SELECT ID_Usuario, CD_Usuario, Senha, DT_Cadastro,DH_Acesso, DT_Vigencia, SN_Bloqueado, ID_Pessoa FROM usuario;';
            
            const [rows] = await db.query(sql);

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de Usuários.',
                itens: rows.length,
                dados: rows
            });
        }catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.mensage
            });
        }
    },

    async inserirUsuarios(request, response){
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Inserir de Usuários.',
                dados:null
            });
        }catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.mensage
            });
        }
    },

    async atualizarUsuarios(request, response){
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Atualizar de Usuários.',
                dados:null
            });
        }catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.mensage
            });
        }
    },

    async excluirUsuarios(request, response){
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Excluir Usuários.',
                dados:null
            });
        }catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.mensage
            });
        }
    }
}