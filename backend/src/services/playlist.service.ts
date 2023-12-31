import { Playlist } from '@prisma/client';
import PlaylistRepository from '../repositories/playlist.repository';
import { HttpNotFoundError } from '../utils/errors/http.error';
import PlaylistModel from '../models/playlist.model';

export interface QueryParams {
  genre?: string;
  duration?: string;
}

class PlaylistService {
  private playlistRepository: PlaylistRepository;

  constructor(playlistRepository: PlaylistRepository) {
    this.playlistRepository = playlistRepository;
  }

  public playlistDuration(totalTime: number) {
    const min = Math.floor((totalTime / 1000 / 60) << 0);
    const seg = Math.floor((totalTime / 1000) % 60);
    const hr = Math.floor((totalTime / (1000 * 60 * 60)) % 24);
    return `${hr}:${min}:${seg}`;
  }

  public async getPlaylists(queryParams: QueryParams): Promise<PlaylistModel[]> {
    const playlists = await this.playlistRepository.getPlaylists(queryParams);
    return playlists;
  }

  public async getPlaylistById(idPlaylist: number): Promise<PlaylistModel[] | null> {
    const playlists = await this.playlistRepository.getPlaylistById(idPlaylist);
    return playlists;
  }

  public async getAllPlaylists(idUser?: number): Promise<Playlist[]> {
    const playlists = await this.playlistRepository.getAllPlaylists(idUser);
    return playlists;
  }

  public async createPlaylist(data: Playlist): Promise<Playlist> {
    return await this.playlistRepository.createPlaylist(data);
  }

  public async getPlaylist(idPlaylist: number, idUser: number): Promise<PlaylistModel | null> {
    const playlist = await this.playlistRepository.getPlaylist(idPlaylist, idUser);

    if (!playlist) {
      throw new HttpNotFoundError({
        msg: 'Playlist not found',
      });
    }

    return playlist;
  }

  public async updatePlaylist(id: number, data: Playlist): Promise<Playlist> {
    const updatedPlaylist = await this.playlistRepository.updatePlaylist(id, data);

    if (!updatedPlaylist) {
      throw new HttpNotFoundError({
        msg: 'Playlist not found',
      });
    }

    return updatedPlaylist;
  }
  public async deletePlaylist(id: number): Promise<void> {
    const playlist = await this.playlistRepository.getPlaylistById(id);

    if (!playlist) {
      throw new HttpNotFoundError({
        msg: 'Playlist not found',
      });
    }

    await this.playlistRepository.deletePlaylist(id);
  }

  public async getPlaylistsByFilter(idUser: number, queryParams: QueryParams) {
    return await this.playlistRepository.getPlaylistsByFilter(idUser, queryParams);
  }
  public async getPlaylistLikesDetails(playlistId: number) {
    return this.playlistRepository.getPlaylistLikesDetails(playlistId);
  }

  public async addLikeToPlaylist(playlistId: number, userId: number) {
    return this.playlistRepository.addLikeToPlaylist(playlistId, userId);
  }

  public async removeLikeFromPlaylist(playlistId: number, userId: number) {
    return this.playlistRepository.removeLikeFromPlaylist(playlistId, userId);
  }

  public async getPlaylistLikes(): Promise<any> {
    return this.playlistRepository.getLikes();
  }

  public async addMusicToPlaylist(idPlaylist: number, idMusica: number): Promise<Playlist | null> {
    return await this.playlistRepository.addMusicToPlaylist(idPlaylist, idMusica);
  }

  public async deleteMusicFromPlaylist(
    idPlaylist: number,
    idMusica: number,
  ): Promise<Playlist | null> {
    return await this.playlistRepository.deleteMusicFromPlaylist(idPlaylist, idMusica);
  }
}

export default PlaylistService;
