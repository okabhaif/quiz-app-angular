import { Component, OnInit, Input } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Quiz } from 'src/app/quiz.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  // @Input() getQuizzes: QuestionsService;

  quizzes: Quiz[];

  constructor(public questionsService: QuestionsService) {
    this.questionsService.getQuizzes()
    .subscribe(quizzes => {
      this.quizzes = quizzes
    })
  }

  ngOnInit() {


  }

  reset() {
    this.quizzes = undefined
  }

}
