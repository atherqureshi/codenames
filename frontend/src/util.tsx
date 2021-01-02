export function validateSessionId(session_id?: string): boolean {
  if (session_id) {
    return RegExp(/^[0-9]{8}$/).test(session_id);
  }
  return false;
}
