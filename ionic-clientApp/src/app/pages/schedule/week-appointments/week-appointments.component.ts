import { Component, OnInit } from "@angular/core";
import { IAppointment, Appointment_List } from "src/model/interfaces";

@Component({
  selector: "app-week-appointments",
  templateUrl: "./week-appointments.component.html",
  styleUrls: ["./week-appointments.component.scss"]
})
export class WeekAppointmentsComponent implements OnInit {
  appointments: IAppointment[] = Appointment_List;
  uniqueDays: string[] = [];
  constructor() {}

  ngOnInit() {
    this.appointments = this.appointments.filter(
      app => app.date.getMonth() == 3
    );

    this.generateUniqueArray();
    console.log(this.uniqueDays, "uniq");
  }

  generateUniqueArray() {
    this.uniqueDays = [];
    this.appointments.map(app => {
      this.uniqueDays.push(app.date.toDateString());
    });
    this.uniqueDays = Array.from(new Set(this.uniqueDays));
  }

  removeItem(appointment: IAppointment) {
    var index = this.appointments.indexOf(appointment);
    if (index > -1) {
      this.appointments.splice(index, 1);
    }

    this.generateUniqueArray();
  }
}
