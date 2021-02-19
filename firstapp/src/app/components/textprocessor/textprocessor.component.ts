import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textprocessor',
  templateUrl: './textprocessor.component.html',
  styleUrls: ['./textprocessor.component.css']
})
export class TextprocessorComponent implements OnInit {

  constructor() { }

  public textStyles = {
    "text-bold": false,
    "text-italic": false,
    "text-underline": false
  }
  public textStyle2 = {
    fontSize: "10pt",
    color: "#000000"
  }
  ngOnInit(): void {
  }
  ChangeBold(e) {
    console.log(e.checked);
    this.textStyles['text-bold'] = e.checked;
  }
  ChangeItalic(e) {
    this.textStyles['text-italic'] = e.checked;
  }
  ChangeUnderline(e) {
    this.textStyles['text-underline'] = e.checked;
  }
  ChangeFontSize(e) {
    this.textStyle2['fontSize'] = e.value + 'pt';
  }
  ChangeColor(e) {
    this.textStyle2['color'] = e.value;
  }
}
