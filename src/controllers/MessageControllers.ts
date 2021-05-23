import Message from "../models/Message";
import { MessageRepositories } from "./../repositories/MessageRepositories";
import { EntityRepository, getCustomRepository, getRepository } from "typeorm";
import { Request, Response } from "express";
@EntityRepository(Message)
class MessageController {
  async create(req: Request, res: Response) {
    const { user, user_destino, text } = req.body;
    try {
      const messageRepositories = getCustomRepository(MessageRepositories);
      const novaMessage = messageRepositories.create({
        user: user,
        user_destino: user_destino,
        text: text,
      });
      const messageSave = await messageRepositories.save(novaMessage);
      return res.status(201).json(messageSave);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  async inserir(dado) {
    const messageRepository = getRepository(Message);
    const novaMessage = {
      user: dado.user,
      user_destino: dado.user_destino,
      text: dado.text,
    };
    const menssage = messageRepository.create(novaMessage);
    try {
      console.log(novaMessage);
      const item = await messageRepository.save(menssage);
      return item;
    } catch (error) {
      console.log({
        massage: "Erro banco de dados Controlador",
        Error: error.massage,
      });
      return null;
    }
  }
  async add(dado) {
    try {
      const messageRepositories = getCustomRepository(MessageRepositories);
      console.log({ dado });
      const novaMessage = messageRepositories.create({
        user: dado.user,
        user_destino: dado.user_destino,
        text: dado.text,
      });
      console.log({ novaMessage });
      const dados = await messageRepositories.save(novaMessage);
      console.log(dados);
      return true;
    } catch (error) {
      console.log(error.massage);
      return false;
    }
  }
  async index() {
    try {
      const messageRepository = getRepository(Message);
      const data = await messageRepository.find();
      return data;
    } catch (error) {
      console.log({ error: error.massage });
      return null;
    }
  }
}
export default new MessageController();
