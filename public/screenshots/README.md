# App screenshots

Real captures from the Android build live here. To add or replace one, drop the
file in and point an entry in `src/content/screenshots.ts` at it with
`ready: true`. An entry left at `ready: false` renders a labelled placeholder
instead of a broken image.

**Capture at 1080x2400** (9:20 — stock on most modern Android phones).
`PhoneFrame` sets `aspect-[9/20]` to match, so nothing is cropped; a different
ratio will get centre-cropped by `object-cover`. Leave the device status bar in
the shot — the frame deliberately draws no fake notch over a ready screenshot,
so the real status bar is what shows.

| File | Screen in `choir_platform_mobile` | In gallery |
| --- | --- | --- |
| `home.jpg` | `lib/features/home/.../home_screen.dart` | yes (hero centre) |
| `player.jpg` | `lib/features/audio_player/.../full_player_screen.dart` | yes (hero side) |
| `rehearsal-mode.jpg` | `lib/features/chords/.../chord_sheet_screen.dart` | yes (hero side) |
| `song-details.jpg` | `lib/features/songs/.../song_detail_screen.dart` | yes |
| `album-detail.jpg` | `lib/features/choir/.../choir_detail_screen.dart` | yes |
| `search.jpg` | `lib/features/search/.../search_screen.dart` | yes |
| `local-songs.jpg` | `lib/features/local_songs/.../local_songs_screen.dart` | yes |
| `profile.jpg` | `lib/features/profile/.../profile_screen.dart` | yes |
| `join-link.jpg` | `lib/features/choir/.../accept_invite_screen.dart` | yes |
| `admin-dashboard.jpg` | `lib/features/choir/.../choir_admin_dashboard_screen.dart` | yes |
| `secure.jpg` | `lib/features/auth/.../auth_experience_screen.dart` (MFA step) | yes |
| `choir-songs.jpg` | `lib/features/choir/.../choir_songs_screen.dart` | **no — re-shoot** |

`choir-songs.jpg` caught the list mid-load, so it is nothing but loading
skeletons. Re-capture it with songs on screen and add the entry back to
`src/content/screenshots.ts`.
