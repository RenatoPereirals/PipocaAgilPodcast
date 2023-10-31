import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SocialMedias } from 'src/app/models/Social-medias';
import { JsonDataService } from 'src/app/services/json-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public medias: SocialMedias[] = [];
  filteredMedias: SocialMedias[] = [];

  constructor(
    private jsonDataService: JsonDataService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.loadMediasById();
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  loadMediasById() {
    this.jsonDataService.getMediaData().subscribe((data: any) => {
      this.medias = data.socialMedias;

      this.filteredMedias = this.medias.filter((media) => {
        return (
          media.id === 'youtube' ||
          media.id === 'instagram' ||
          media.id === 'linkedin'
        );
      });
    });
  }
}
