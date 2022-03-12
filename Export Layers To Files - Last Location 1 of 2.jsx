// Export Layers To Files - Last Location 1 of 2.jsx
// Script 1 of 2

#target photoshop

// Stephen Marsh, 12th March 2022

try {
    var os = $.os.toLowerCase().indexOf("mac") >= 0 ? "mac" : "windows";
    if (os === "mac") {
        prefFileLF = "Unix"; // Legacy = "Macintosh"
    } else {
        prefFileLF = "Windows";
    }
    // Set the save folder path
    var prefFileValue = Folder.selectDialog('Select an output directory...'); // destination folder
    // Write the last save path preference file in the user home folder
    var prefFile = new File('~/Export Layers to Files Last Location.log');
    // Write the directory path to the pref file
    // r = read mode | w = write mode | a = append | e = edit
    prefFile.open('w');
    prefFile.encoding = 'UTF-8';
    prefFile.lineFeed = prefFileLF;
    prefFile.write(prefFileValue.fsName);
    prefFile.close();
    // Hide the pref file?
    //prefFile.hidden = true;
    // alert('Save location set to:' + '\r' + prefFileValue.fsName);
    alert('Now run the "Export Layers To Files - Last Location 2 of 2" script...');
} catch (e) {
    alert("There was an error writing the .log file!");
}
