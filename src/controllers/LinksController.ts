import { Request, Response } from 'express';
import { gereneteCode } from '../Helpers/generateCode';
import { getCustomRepository } from 'typeorm';

import LinkRepository from '../repositories/LinkRepository'
import Link from '../models/Link';
import { dateValidator } from '../Helpers/dateValidator';

class LinksControllers {

  async create(request: Request, response: Response){
    const { url } = request.body;
    const linkRepository = getCustomRepository(LinkRepository);
    
    const linkExists = await linkRepository.findOne({url})

    if(linkExists){
      response.status(400).json({error: 'url is exists'});
    }
    

    const newLink = linkRepository.create({
       url,
       code:gereneteCode(),
       hit: 0
    })

    const { code } = await linkRepository.save(newLink);

    return response.status(201).json(code)

  }
   async index(request: Request, response: Response){
    const { code } = request.params;

    const linkRepository = getCustomRepository(LinkRepository);

    const linkExists = await linkRepository.findOne({code});

    if(!linkExists){
      response.status(400).json({error: 'url not is exists'});
    }
    

    return response.status(201).json( linkExists );


  }
   async hit(request: Request, response: Response){
    const { code } = request.params;

    const linkRepository = getCustomRepository(LinkRepository);

    const linkExists : Link | any = await linkRepository.findOne({code});

    if(!linkExists){
      response.status(400).json({error: 'url not is exists'});
    }

     console.log(dateValidator(linkExists.created_at))

     const days = dateValidator(linkExists.created_at);

     if(days > 30){
      response.status(404).json({error: 'url not valid'});
     }

     const id : any = linkExists?.id;

     linkExists!.hit =  parseInt(linkExists!.hit) + 1;
    
     await linkRepository.update( id, linkExists );

     return response.redirect(linkExists.url)

  }
  
}

export default new LinksControllers();