// @ts-check
//

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  const uniqueTracks = new Set(playlist);
  return Array.from(uniqueTracks);
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  const uniqueTracks = new Set(playlist);
  return uniqueTracks.has(track);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  const uniqueTracks = new Set(playlist);
  uniqueTracks.add(track);
  return Array.from(uniqueTracks);
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  const uniqueTracks = new Set(playlist);
  uniqueTracks.delete(track);
  return Array.from(uniqueTracks);
}

/**
 * Parses artist from track.
 * 
 * @param {string} track
 * @return {string} artist
 */
function parseArtist(track) {
  return track.slice(track.indexOf("-") + 1).trim();
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  const artists = [];
  for (const track of playlist) {
    artists.push(parseArtist(track));
  }
  return Array.from(new Set(artists));
}
