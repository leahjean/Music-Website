/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author kejij
 */
import java.io.*;
import static java.lang.Double.parseDouble;
import static java.lang.Integer.parseInt;
import java.util.Iterator;
import java.util.Map;
import java.util.TreeMap;

public class DumpParser {
    private static double length = 0.0;  // Ticks
    private static double res = 0.0;  // Ticks per beat
    private static double bpm = 0.0;  // Beats per minute
    private static double tps = 0.0;  // Ticks per second
    private static double delay = 0d;  // Delay for the song
    private static TreeMap beatmap = new TreeMap();
    
    public static void main (String[] args) {
        String fileName = "chainsmokers-dump.txt";
        String line = null;  // Stores the info in each line
        try {
            // FileReader reads text files in the default encoding.
            FileReader fileReader = new FileReader(fileName);

            // Always wrap FileReader in BufferedReader.
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            
            // The dump file must contain each string sequentially
            while((line = bufferedReader.readLine()) != null) {
                if (line.contains("Length")) {
                    length = parseDouble(line.substring(8, 14));
                    continue;
                }
                if (line.contains("Resolution")) {
                    res = parseDouble(line.substring(12, 15));
                    continue;
                }
                if (line.contains("Tempo:")) {
                    bpm = parseDouble(line.substring(19, 23));
                    tps = res * bpm / 60;
                    continue;
                }
                // Parse in noteOn events with non-zero velocity
                if (line.contains("note On") && !line.contains("velocity: 0")) {
                    // Get the tick indices
                    int tickEnd = line.indexOf(": [");
                    int tickNum = parseInt(line.substring(5, tickEnd));
                    
                    // Convert ticks to seconds and round to third decimal
                    double seconds = (double) (tickNum / tps);
                    double time = Math.round((seconds - delay) * 1000d) / 1000d;
                    // Get the note indexes if necessary
                    // int noteStart = line.indexOf("note On") + 8;
                    // int noteEnd = line.indexOf("velocity");
                    
                    // Get a random beat
                    String beats = getBeats();

                    // Add time and beat information to hashmap
                    if (!beatmap.containsKey(time)) {
                        beatmap.put(time, beats);
                    }
                }
            }
            
            // Print contents of the Hashmap
            Iterator it = beatmap.entrySet().iterator();
            while(it.hasNext()) {
                Map.Entry pair = (Map.Entry) it.next();
                out("    {song_pos: " + pair.getKey() + ", beats: \"" + 
                        pair.getValue() + "\"},"); 
                it.remove();
            }
            
            bufferedReader.close();  // End File IO
        } catch (IOException e) {
            e.printStackTrace();
        }
            
    }
    
    // 
    private static String getBeats() {
        // Beats for the note
        char[] ret = "000000".toCharArray();
        
        // Randomize the beats to set to play
        int firstBeat = (int) (Math.random() * 6);
        //int secondBeat = (int) (Math.random() * 6);
        ret[firstBeat] = '1';
        //ret[secondBeat] = '1';
        return new String(ret);
    }
    
    // Wrapper methods for printing outputs
    private static void out(String strMessage) {
            System.out.println(strMessage);
    }
    private static void out(Double d) {
            System.out.println(d);
    }
    private static void out(int i) {
            System.out.println(i);
    }
}
