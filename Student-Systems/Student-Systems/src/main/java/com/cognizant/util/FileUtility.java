package com.cognizant.util;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;

@Component
public class FileUtility {


    //method through which i can save the image in the server
    public String uploadImage(String path, MultipartFile file, String studentName) throws IOException {

        //getting file name
        String name=file.getOriginalFilename();

        //random name generate file
       // String randomId= UUID.randomUUID().toString();
        String fileName1=(studentName+"_"+name);

        //full path
        String filepath=path+File.separator+fileName1;
        System.out.println("filepath"+filepath);
        //create folder if not created
        File f=new File(path);

        if(!f.exists())
        {
            f.mkdir();
        }

        //file copy
        Files.copy(file.getInputStream(), Paths.get(filepath));
        return fileName1;


    }


    //method to which we are getting

    public InputStream getResource(String path, String fileName) throws FileNotFoundException {


        String fullPath=path+File.separator+fileName;
        InputStream is=new FileInputStream(fullPath);
        return is;


    }



}
