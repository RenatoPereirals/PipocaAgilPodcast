import { Component, OnInit, HostListener } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Pagination } from 'src/app/models/Pagination';
import { JsonDataService } from 'src/app/services/json-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  videos: any[] = [];
  public paginatedVideo = {} as Pagination;
  public paginatedVi: any[] = [];
  public paginatedVideos: any[] = [];
  public pages: number[] = [];
  public currentPage: number = 1;
  public clickedPage: number | null = null;
  public isMobile: boolean = false;

  socialMediaUrls = {
    youtube: 'https://www.youtube.com/@PipocaAgil',
    twitter: 'https://twitter.com/pipoca_agil',
    instagram: 'https://www.instagram.com/pipocaagil/',
    spotify: 'https://open.spotify.com/show/5J1scP1l7m7kXK6v5RZS7J',
    linkedin:
      'https://www.linkedin.com/company/pipoca-%C3%A1gil/mycompany/verification/',
    facebook: 'https://web.facebook.com/pipocaagil/?_rdc=1&_rdr',
  };

  path = '../../../assets/image/';

  constructor(
    private jsonDataService: JsonDataService,
    private sanitizer: DomSanitizer
  ) {}

  public ngOnInit(): void {
    this.loadVideos();
    this.paginatedVideo = {
      currentPage: 1,
      itemsPerPage: 3,
      totalItems: 1,
    } as Pagination;

    this.pages = Array.from(
      { length: this.paginatedVideo.totalPages },
      (_, i) => i + 1
    );

    this.checkScreenSize();
    console.log('é mobile = ' + this.isMobile);

  }

  @HostListener('window:resize', ['$event'])
  checkScreenSize(event?: Event) {
    this.isMobile = window.innerWidth <= 480;
  }

  getSafeVideoUrl(videoUrl: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  loadVideos() {
    this.jsonDataService.getData().subscribe((data: any) => {
      this.videos = data.videos || [];
      this.paginatedVideo.totalItems = this.videos.length;
      this.calculateTotalPages();
      this.displayVideosOnCurrentPage();
    });
  }

  public onPageChanged(number: number): void {
    this.paginatedVideo.currentPage = number;
    this.displayVideosOnCurrentPage();
  }

  displayVideosOnCurrentPage() {
    const startIndex =
      (this.paginatedVideo.currentPage - 1) * this.paginatedVideo.itemsPerPage;
    const endIndex = startIndex + this.paginatedVideo.itemsPerPage;
    this.paginatedVi = this.videos.slice(startIndex, endIndex);
  }

  calculateTotalPages() {
    this.paginatedVideo.totalPages = Math.ceil(
      this.paginatedVideo.totalItems / this.paginatedVideo.itemsPerPage
    );
  }
}
