import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit
{
  @Input() userName = '';
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges triggered', changes);

    if (!changes['userName'].isFirstChange()) {
      if (changes['userName'].currentValue === 'Chris') {
        this.userName = 'Hello ' + this.userName;
      } else {
        this.userName = changes['userName'].previousValue;
      }
    }
  }

  ngOnInit() {
    console.log('ngOnInit from the child component');
  }

  ngDoCheck() {
    console.log('ngDoCheck triggered');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit - wrapper', this.wrapper);
    console.log('ngAfterContentInit - contentWrapper', this.content);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked triggered');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit - wrapper', this.wrapper);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked triggered');
  }
}
