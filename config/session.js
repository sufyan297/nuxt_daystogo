const session = {
  local: {
    store: 'file',
    secret: 'meow',
    path: './tmp/sessions',
    cookie: { 
      maxAge: 3600000 
    }
  }
}
export default session;