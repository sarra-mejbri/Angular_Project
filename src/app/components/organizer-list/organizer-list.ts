import { Component, signal } from '@angular/core';
import { Organizer } from '../../models/organizer';
import { ORGANIZERS } from '../../data/organizers';

@Component({
  selector: 'app-organizer-list',
  imports: [],
  templateUrl: './organizer-list.html',
  styleUrl: './organizer-list.css',
})
export class OrganizerList {
  organizers = signal<Organizer[]>(ORGANIZERS);
}