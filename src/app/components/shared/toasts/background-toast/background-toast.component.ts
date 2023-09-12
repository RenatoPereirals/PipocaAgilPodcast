import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-background-toast',
  templateUrl: './background-toast.component.html',
  styleUrls: ['./background-toast.component.css'],
})
export class BackgroundToastComponent implements OnInit {
  constructor(public toastService: ToastService) {}

  ngOnInit(): void {}
}
