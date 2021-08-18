
'use strict';

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {


  async findOne(ctx) {
    

    let entities;

    const { slug } = ctx.params;
    
    
    if (ctx.query._q) {
      entities = await strapi.services.profile.search(ctx.query);
    } else {
      entities = await strapi.services.profile.find(ctx.query, ['user','posts','followings','followers','followers.profile','followers.mainid']);
    }

    
    const result = entities.filter(profile=>{
      return profile.user.username===slug
    })

   console.log(result);


  return result;
  },







  
  async getMe(ctx) {
    let entities;

    const user = ctx.state.user;

    if(!user){
        return ctx.badRequest(null,[{messages:[{id:"No Auth Header was found"}]}])
    }



    entities = await strapi.query('profile').findOne({user:user.id})

    return sanitizeEntity(entities, { model: strapi.models.profile });
  },

 
 

  async createMe(ctx) {
    let entity;

    const user = ctx.state.user;

    if(!user){
        return ctx.request(null,[{messages:[{id:"No Auth Header was found"}]}])
    }



    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);

      data['user'] = user;

      entity = await strapi.services.profile.create(data, { files });
    } else {
        const data = ctx.request.body;
        data['user'] = user;
      entity = await strapi.services.profile.create(data);
    }
    return sanitizeEntity(entity, { model: strapi.models.profile });
  }

  





};
 