import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-bypass-security',
  templateUrl: './bypass-security.component.html',
  styleUrls: ['./bypass-security.component.css']
})
export class BypassSecurityComponent implements OnInit {
  videoUrl: SafeResourceUrl;
  constructor() {
    // in a frame because it set 'X-Frame-Options' to 'sameorigin'.所以要replace watch?v=
    this.videoUrl = 'https://www.youtube.com/watch?v=KhzGSHNhnbI'.replace("watch?v=", "embed/");
  }

  ngOnInit() {

  }
}
