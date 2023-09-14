import { Box, Typography } from '@mui/material';
import { Playlist } from '../../types/playlistTypes';
import { useEffect, useState } from 'react';
import { PlaylistService } from '../../services/PlaylistService';
import homeIcon from '../../assets/home.svg';
import radioIcon from '../../assets/radio.svg';
import libraryIcon from '../../assets/library.svg';
import AlbumTest from '../../assets/AlbumTest.svg';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface SidemenuLinks {
  iconUrl?: string;
  title: string;
  href: string;
}

function Sidemenu() {
  const { idUser, idPlaylist } = useParams();
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  const navigate = useNavigate();

  const sidemenuLinks: SidemenuLinks[] = [
    {
      iconUrl: homeIcon,
      title: 'Home',
      href: '/user/:id',
    },
    {
      iconUrl: radioIcon,
      title: 'Explorar',
      href: '/explore',
    },
    {
      iconUrl: libraryIcon,
      title: 'Biblioteca',
      href: '/library',
    },
    {
      iconUrl: libraryIcon,
      title: 'Albuns',
      href: '/albuns',
    },
  ];
  playlists.map(playlist => {
    sidemenuLinks.push({
      iconUrl: AlbumTest,
      title: playlist.name,
      href: `/user/1/playlist/${playlist.id}`,
    });
    return playlist;
  });
  useEffect(() => {
    async function getAllPlaylists(id: number) {
      PlaylistService.getPlaylistsFromUser(id)
        .then(response => {
          setPlaylists(response.data);
          console.log('deu certo!', response);
        })
        .catch(err => console.log('err', err));
    }
    if (idUser) getAllPlaylists(+idUser);
  }, []);
  useEffect(() => {
    console.log('playlists', playlists);
  }, [playlists]);

  return (
    <Box sx={{ padding: '15px !important', width: '15%', backgroundColor: '#1F2232' }}>
      {sidemenuLinks.map(element => {
        if (element.title === 'Biblioteca') {
          return (
            <>
              <Box sx={{ borderTop: '1px solid #bbb', borderRadius: '5px', paddingTop: '5px' }} />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  columnGap: '25px',
                  rowGap: '200px',
                  padding: '10px !important',
                }}
              >
                <img src={element.iconUrl} alt={`${element.title}`} />
                <Typography sx={{ fontSize: '0.8rem' }} color={'whitesmoke'}>
                  {element.title}
                </Typography>
              </Box>
            </>
          );
        }
        if (element.title === 'Home') {
          return (
            <>
              <Box
                sx={{
                  borderTop: 'none',
                  borderRadius: '5px',
                  paddingBottom: '0px',
                  cursor: 'pointer',
                }}
              />
              <div onClick={() => navigate('/')}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    columnGap: '25px',
                    rowGap: '200px',
                    padding: '10px !important',
                    paddingBottom: '15px !important',
                  }}
                >
                  <img src={element.iconUrl} alt={`${element.title}`} />
                  <Typography sx={{ fontSize: '0.8rem' }} color={'whitesmoke'}>
                    {element.title}
                  </Typography>
                </Box>
              </div>
            </>
          );
        }
        if (element.title === 'Explorar') {
          return (
            <>
              <Box sx={{ borderTop: 'none', borderRadius: '5px', paddingBottom: '0px' }} />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  columnGap: '25px',
                  rowGap: '200px',
                  padding: '10px !important',
                  paddingBottom: '15px !important',
                }}
              >
                <img src={element.iconUrl} alt={`${element.title}`} />
                <Typography sx={{ fontSize: '0.8rem' }} color={'whitesmoke'}>
                  {element.title}
                </Typography>
              </Box>
            </>
          );
        }
        if (element.title === 'Albuns') {
          return (
            <>
              <Box
                sx={{
                  borderTop: 'none',
                  borderRadius: '5px',
                  paddingBottom: '0px',
                  cursor: 'pointer',
                }}
              />
              <div onClick={() => navigate('/albuns')}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    columnGap: '25px',
                    rowGap: '200px',
                    padding: '10px !important',
                    paddingBottom: '15px !important',
                  }}
                >
                  <img src={element.iconUrl} alt={`${element.title}`} />
                  <Typography sx={{ fontSize: '0.8rem' }} color={'whitesmoke'}>
                    {element.title}
                  </Typography>
                </Box>
              </div>
            </>
          );
        }

        return (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              columnGap: '25px',
              rowGap: '200px',
              padding: '10px !important',
            }}
          >
            <img src={element.iconUrl} alt={`${element.title}`} />
            <Typography sx={{ fontSize: '0.8rem' }} color={'whitesmoke'}>
              {element.title}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default Sidemenu;
