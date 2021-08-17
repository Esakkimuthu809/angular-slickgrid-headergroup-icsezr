import { Component, OnInit } from '@angular/core';
import {
  Formatter,
  Formatters,
  Column,
  GridOption,
  AngularGridInstance,
  Filters,
  FieldType
} from 'angular-slickgrid';

// create my custom Formatter with the Formatter type
const myCustomCheckmarkFormatter: Formatter = (
  row: number,
  cell: number,
  value: any,
  columnDef: Column,
  dataContext: any
) =>
  value
    ? `<i class="fa fa-fire" aria-hidden="true"></i>`
    : '<i class="fa fa-snowflake-o" aria-hidden="true"></i>';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  columnDefinitions: Column[];
  gridOptions: GridOption;
  dataset = [];

  ngOnInit(): void {
    this.columnDefinitions = [
      {
        id: 'title',
        name: 'Title',
        field: 'title',
        sortable: true,
        columnGroup: 'Common Factor'
      },
      {
        id: 'duration',
        name: 'Duration',
        field: 'duration',
        columnGroup: 'Common Factor'
      },
      { id: 'start', name: 'Start', field: 'start', columnGroup: 'Period' },
      { id: 'finish', name: 'Finish', field: 'finish', columnGroup: 'Period' },
      {
        id: '%',
        name: '% Complete',
        field: 'percentComplete',
        selectable: false,
        columnGroup: 'Analysis'
      },
      {
        id: 'effort-driven',
        name: 'Effort Driven',
        field: 'effortDriven',
        type: FieldType.boolean,
        columnGroup: 'Analysis'
      }
    ];

    this.gridOptions = {
      frozenColumn: 1,
      enableAutoResize: false,
      enableCellNavigation: true,
      enableColumnReorder: false,
      enableSorting: true,
      createPreHeaderPanel: true,
      showPreHeaderPanel: true,
      preHeaderPanelHeight: 25,
      explicitInitialization: true,
      colspanCallback: this.renderDifferentColspan
    };

    this.getData();
  }

  getData() {
    // Set up some test columns.
    const mockDataset = [];
    for (let i = 0; i < 500; i++) {
      mockDataset[i] = {
        id: i,
        title: 'Task ' + i,
        duration: '5 days',
        percentComplete: Math.round(Math.random() * 100),
        start: '01/01/2009',
        finish: '01/05/2009',
        effortDriven: i % 5 === 0
      };
    }
    this.dataset = mockDataset;
  }

  /**
   * A callback to render different row column span
   * Your callback will always have the "item" argument which you can use to decide on the colspan
   * Your return must always be in the form of:: return { columns: {}}
   */
  renderDifferentColspan(item: any) {
    if (item.id % 2 === 1) {
      return {
        columns: {
          duration: {
            colspan: 3 // "duration" will span over 3 columns
          }
        }
      };
    } else {
      return {
        columns: {
          0: {
            colspan: '*' // starting at column index 0, we will span accross all column (*)
          }
        }
      };
    }
  }
}
