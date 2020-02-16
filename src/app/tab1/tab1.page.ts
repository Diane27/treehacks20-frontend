import { Component, OnInit, ViewChild } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  hotflashchart: any;
  sleepdatachart: any;


  constructor() {}

  ngOnInit() {
    const dataPoints = [{
      x: 1,
      y: 10
    }, {
      x: 2,
      y: 20
    },
    {
      x: 3,
      y: 0
    }];
    const labels = ['a','b', 'c'];

    getHotFlashData(((labels, dataPoints) => {
      this.hotflashchart = new Chart('hotflashes', {
        type: 'bar',
        data: {
          labels: labels, // your labels array
          datasets: [
            {
              data: dataPoints, // your data array
              borderColor: '#00AEFF',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    }).bind(this))

    this.sleepdatachart = new Chart('sleepdata', {
      type: 'line',
      data: {
        labels: labels, // your labels array
        datasets: [
          {
            data: dataPoints, // your data array
            borderColor: '#00AEFF',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

}

import { Database } from '../../data_processing/database';

function getHotFlashData(callback) {
  var db = new Database();
  var end = new Date(Date.now());
  var begin = end;
  begin.setHours(begin.getHours()-12);

  var histogram = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var labels = [];
  var currentTime = begin;
  for (var i=0; i<histogram.length; i++) {
    labels.push(currentTime.getHours() + ":" + currentTime.getMinutes());
    currentTime.setHours(currentTime.getHours()+2);
  }

  db.getRangeData(begin, end, (docs) => {
    console.log(docs);

    for (var i=0; i<docs.length; i++) {
      if (docs[i].type==0) {
        histogram[docs[i].ts.getHours()-begin.getHours()] += 1;
      }
    }

    callback(labels, histogram);
  })
}

function getSleepData(callback) {
  var db = new Database();
  var end = new Date(Date.now());
  var begin = end;
  begin.setDate(end.getDate()-14);

  db.getSleep((docs) => {
    var sleeps = [];
    for (var i=0; i<docs.length; i++) {
      if (docs[i].ts >= begin && docs[i].ts <= end)
        sleeps.push(docs[i]);
    }

    callback(sleeps);
  })
}