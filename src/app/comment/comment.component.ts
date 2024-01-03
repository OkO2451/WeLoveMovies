import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { Comment } from '../models/Comment';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() id!: number;
  @Input() contenu!: string;
  @Input() date!: string;
  @Input() auteur!: string;
  @Input() reference!: number;

  comments: Comment[] = [];

  constructor(private userService: UserService,private commentService: CommentService ) { }

  ngOnInit(): void {
    this.getComments();
  }

  getComments(): void {
    this.commentService.getComments(this.reference).subscribe(comments => {
      this.comments = comments;
    });
  }

  addComment(): void {
    this.id = Math.floor(Math.random() * 1000);
    this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    this.auteur = this.userService.getUser().username;
    const newComment: Comment = {
      id: this.id,
      contenu: this.contenu,
      date: this.date,
      auteur: this.auteur,
      reference: this.reference
    };

    this.commentService.addComment(newComment).subscribe(comment => {
      this.comments.push(comment);
    });
  }
}