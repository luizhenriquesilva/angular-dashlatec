import { Component, ViewChild } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: [
    "./app.component.css",
    "../css/sb-admin.min.css",
    "../css/sb-admin.css",
    "../css/darktable.css"
  ]
})
export class AppComponent {
  name = "Angular   6";
  canvas: any;
  ctx: any;
  @ViewChild("mychart") mychart;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext("2d");

    let myChart = new Chart(this.ctx, {
      type: "line",
      data: {
        datasets: [
          {
            label: "Horas planejadas",
            backgroundColor: "rgb(20, 255, 222)",
            borderColor: "rgb(20, 255, 222)",
            fill: false,
            data: [
              { x: 1, y: 2 },
              { x: 1000, y: 2.5 },
              { x: 1500, y: 5 },
              { x: 2000, y: 4.75 },
              { x: 3000, y: 4.75 },
              { x: 5000, y: 6 },
              { x: 7000, y: 7 },
              { x: 8000, y: 6 }
            ]
          },
          {
            label: "Horas trabalhadas",
            backgroundColor: "rgba(255, 99, 132,0.4)",
            borderColor: "rgb(255, 99, 132)",
            fill: false,
            data: [
              { x: 1, y: 2 },
              { x: 1000, y: 2.5 },
              { x: 1500, y: 4 },
              { x: 2000, y: 5 },
              { x: 3000, y: 3.75 },
              { x: 5000, y: 6 },
              { x: 7000, y: 5 },
              { x: 8000, y: 6 }
            ]
          }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "Horas planejadas x Horas trabalhadas"
        },
        scales: {
          xAxes: [
            {
              type: "linear",
              position: "bottom",
              ticks: {
                userCallback: function(tick) {
                  if (tick >= 1000) {
                    return (tick / 1000).toString() + "";
                  }
                  return tick.toString() + "m";
                }
              },
              scaleLabel: {
                labelString: "Posto",
                display: true
                
              }
            }
          ],
          yAxes: [{
                type: 'time',
                
                time: {
                    unit: 'day'
                }
                
            }
          ]
        }
      }
    });
  }
}
