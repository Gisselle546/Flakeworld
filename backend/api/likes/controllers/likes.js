const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Delete a record.
   *
   * @return {Object}
   */

   async delete(ctx) {
    const { id } = ctx.params;

    let entity;

    const [likes] = await strapi.services.likes.find({
      id: ctx.params.id,
      'user': ctx.state.user.id,
    });

    if (!likes) {
      return ctx.unauthorized(`You can't update this entry`);
    }

    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.likes.delete({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services.likes.delete({ id }, ctx.request.body);
    }

    return sanitizeEntity(entity, { model: strapi.models.likes});
  },

}