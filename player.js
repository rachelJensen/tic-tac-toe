class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = localStorage.getItem(this.id) || 0;
  }

  saveWinsToStorage() {
    var storedWins = JSON.stringify(this.wins);
    localStorage.setItem(`${this.id}`, storedWins);
  };

  retrieveWinsFromStorage() {
    var retrievedWins = JSON.parse(localStorage.getItem(`${this.id}`));
    return retrievedWins;
  };
};
// 
