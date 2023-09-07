import { Component, OnInit } from '@angular/core';
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
  pagination: Pagination = {
    currentPage: 1,
    itemsPerPage: 3, // Exibe três vídeos por página
    totalItems: 0,
    totalPages: 0,
  };

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
  ngOnInit(): void {
    this.loadVideos();
  }

  getSafeVideoUrl(videoUrl: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  loadVideos() {
    this.jsonDataService.getVideos().subscribe((videos: any[]) => {
      this.videos = videos || [];
      this.pagination.totalItems = this.videos.length;
      this.calculateTotalPages();
      this.displayVideosOnCurrentPage();
    });
  }

  onPageChanged(pageNumber: number) {
    this.pagination.currentPage = pageNumber;
    this.displayVideosOnCurrentPage();
  }

  displayVideosOnCurrentPage() {
    const startIndex =
      (this.pagination.currentPage - 1) * this.pagination.itemsPerPage;
    const endIndex = startIndex + this.pagination.itemsPerPage;
    this.videos = this.videos.slice(startIndex, endIndex);
  }

  calculateTotalPages() {
    this.pagination.totalPages = Math.ceil(
      this.pagination.totalItems / this.pagination.itemsPerPage
    );
  }
}
