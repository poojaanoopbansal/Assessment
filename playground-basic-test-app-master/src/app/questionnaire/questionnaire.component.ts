import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from '../questionnaire.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  questions: any;
  model: any;
  questionForm: NgForm;
  answers={};
  subscription: Subscription[];

  constructor(private quesService: QuestionnaireService) { }

  ngOnInit(): void {
    this.subscription.push(this.quesService.getQuestions().subscribe((data)=>
    {
    this.questions = data;
    this.model = {...this.questions};
    }
    )
    );
  }
  submitQuestion() {
    let counter =1;
    for (let key in this.model.item) {
      let answer= this.model.item[key].answer;
      if (this.model.item[key].answer) {
        this.answers[counter]= answer;
        counter++;
      } else {
        for (let innerKey in this.model.item[key].item) {
          let answer= this.model.item[key].item[innerKey].answer;
          if (this.model.item[key].item[innerKey].answer) {
            this.answers[counter]= answer;
            counter++;
          }
        }}
    }
  }

  ngOnDestroy() {
    this.subscription.forEach((item) => item.unsubscribe());
  }

}
