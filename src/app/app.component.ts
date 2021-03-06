import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  names: Array<any> = [
    {
      id: 1,
      firstName: "Fernando",
      lastName: "Martinez"
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Doe"
    },
    {
      id: 3,
      firstName: "Jane",
      lastName: "Doe"
    },
    {
      id: 4,
      firstName: "Richard",
      lastName: "Arklay"
    }
  ];

  nameToAdd = {
    id: 0,
    firstName: "",
    lastName: ""
  };

  updateFirstName($event) {
    this.nameToAdd.firstName = $event.target.value;
  }
  updateLastName($event) {
    this.nameToAdd.lastName = $event.target.value;
  }

  onDelete($eventArgs) {
    this.names = this.names.filter(x => x.id != $eventArgs.target.value);
  }

  findHighestId() {
    let max = 0;

    for (let i = 0; i < this.names.length; i++) {
      if (this.names[i].id > max) {
        max = this.names[i].id;
      }
    }
    return max;
  }

  addName() {
    if (
      this.nameToAdd.firstName.trim() === "" ||
      this.nameToAdd.lastName.trim() === ""
    ) {
      return;
    }

    this.nameToAdd.id = this.findHighestId() + 1;

    this.names.push({
      id: this.nameToAdd.id,
      firstName: this.nameToAdd.firstName,
      lastName: this.nameToAdd.lastName
    });

    this.nameToAdd.id = 0;
    this.nameToAdd.firstName = "";
    this.nameToAdd.lastName = "";
  }
}
