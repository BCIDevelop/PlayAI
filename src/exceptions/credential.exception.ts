class CredentialError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "CredentialError"; 
    }
  }
  export default CredentialError