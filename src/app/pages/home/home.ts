import { Component, computed, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../models/conference';
import { ORGANIZERS } from '../../data/organizers';
import { OrganizerList } from '../../components/organizer-list/organizer-list';

@Component({
  selector: 'app-home',
  imports: [DatePipe, FormsModule, OrganizerList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  conferences = signal<Conference[]>([
    {
      id: 1,
      picture: 'https://picsum.photos/seed/conf-ia/600/400',
      title: 'Intelligence Artificielle 2027',
      date: new Date('2027-01-15'),
      adress: 'Palais des Congrès, Tunis',
      available_Places: 120,
      organizers: [ORGANIZERS[0], ORGANIZERS[2]],
    },
    {
      id: 2,
      picture: 'https://picsum.photos/seed/conf-web/600/400',
      title: 'Web & Frameworks Modernes',
      date: new Date('2027-02-03'),
      adress: 'Technopole El Ghazala, Ariana',
      available_Places: 80,
      organizers: [ORGANIZERS[1]],
    },
    {
      id: 3,
      picture: 'https://picsum.photos/seed/conf-cyber/600/400',
      title: 'Cybersécurité & Cloud',
      date: new Date('2027-03-20'),
      adress: 'Hôtel Mövenpick, Sousse',
      available_Places: 15,
      organizers: [ORGANIZERS[1], ORGANIZERS[2], ORGANIZERS[3]],
    },
    {
      id: 4,
      picture: 'https://picsum.photos/seed/conf-startup/600/400',
      title: 'Startups & Innovation',
      date: new Date('2027-04-10'),
      adress: 'Centre Culturel, Sfax',
      available_Places: 0,
      organizers: [ORGANIZERS[3]],
    },
    {
      id: 5,
      picture: 'https://picsum.photos/seed/conf-data/600/400',
      title: 'Data Science & Big Data',
      date: new Date('2027-05-06'),
      adress: 'ESPRIT, Ariana',
      available_Places: 45,
      organizers: [ORGANIZERS[0], ORGANIZERS[3]],
    },
    {
      id: 6,
      picture: 'https://picsum.photos/seed/conf-mobile/600/400',
      title: 'Développement Mobile',
      date: new Date('2027-06-18'),
      adress: 'Cité de la Culture, Tunis',
      available_Places: 8,
      organizers: [], // aucun organisateur → teste le cas @empty
    },
  ]);

  // Two-way binding : texte de recherche
  searchTitle = signal('');

  // Liste filtrée, recalculée automatiquement quand searchTitle ou conferences change
  filteredConferences = computed(() => {
    const search = this.searchTitle().trim().toLowerCase();
    return this.conferences().filter((c) => c.title.toLowerCase().includes(search));
  });

  // Event binding : participer = une place disponible en moins
  participate(conference: Conference): void {
    this.conferences.update((list) =>
      list.map((c) =>
        c.id === conference.id ? { ...c, available_Places: c.available_Places - 1 } : c,
      ),
    );
  }
}