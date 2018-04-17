function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
   * followed by one or more letters.
   */

  const re = /^[MDE][rs]s?\.\w*$/;
  /*
   * Do not remove the return statement
   */
  return re;
}