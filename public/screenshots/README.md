# App screenshots

Drop real captures here, then flip `ready: true` for that entry in
`src/content/screenshots.ts`. Until then the gallery renders a labelled
placeholder instead of a broken image.

Expected filenames (each maps to a screen in the Flutter app):

| File | Screen in `choir_platform_mobile` |
| --- | --- |
| `home.png` | `lib/features/home/.../home_screen.dart` |
| `choir-songs.png` | `lib/features/choir/.../choir_songs_screen.dart` |
| `rehearsal-mode.png` | `lib/features/chords/.../rehearsal_mode_screen.dart` |
| `player.png` | `lib/features/audio_player/.../full_player_screen.dart` |
| `album-detail.png` | `lib/features/albums/.../album_detail_screen.dart` |
| `search.png` | `lib/features/search/.../search_screen.dart` |
| `notifications.png` | `lib/features/notifications/.../notification_inbox_screen.dart` |
| `admin-dashboard.png` | `lib/features/choir/.../choir_admin_dashboard_screen.dart` |

Capture at a 9:19.5 aspect ratio (any modern Android phone frame) so the images
fill the device frame without cropping. 1080x2340 works well.
