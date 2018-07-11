export default {
  name: 'home',
  method: 'GET',
  input: {}, //Not using right now
  route: '/',
  main: (input, {Database, Session, req, res, next}) => {

    const data = {
      title: "Welcome to the NuxtJS"
    }

    //Setting Payload on Request.
    req.data = data;
    //--------------------------



    /* Session */
    // Session.set(req, 'posts', data); -> Setting Session
    // Session.get(req, 'posts); -> Get Session
    // Session.exists(req, 'posts) -> Return True/False

    next();
  //  return res.status(200).send({status: 'success'});
  }
}