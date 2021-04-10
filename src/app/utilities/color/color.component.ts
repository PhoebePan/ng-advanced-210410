import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  type = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.type = +this.route.snapshot.paramMap.get('type');

    this.route.paramMap.subscribe(params => {
      this.type = +params.get('type');
    });
  }

  plusOne() {
    this.router.navigate(['/utilities/color/', this.type+1]);
  }

}
