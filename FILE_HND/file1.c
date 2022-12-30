// // C program to Open a File,
// // Read from it, And Close the File

// # include <stdio.h>
// # include <string.h>

// int main( )
// {

// 	// Declare the file pointer
// 	FILE *filePointer ;
	
// 	// Declare the variable for the data to be read from file
// 	char dataToBeRead[50];

// 	// Open the existing file GfgTest.c using fopen()
// 	// in read mode using "r" attribute
// 	filePointer = fopen("GfgTest.txt", "r") ;
	
// 	// Check if this filePointer is null
// 	// which maybe if the file does not exist
// 	if ( filePointer == NULL )
// 	{
// 		printf( "GfgTest.c file failed to open." ) ;
// 	}
// 	else
// 	{
		
// 		printf("The file is now opened.\n") ;
		
// 		// Read the dataToBeRead from the file
// 		// using fgets() method
// 		while( fgets ( dataToBeRead, 50, filePointer ) != NULL )
// 		{
		
// 			// Print the dataToBeRead
// 			printf( "%s" , dataToBeRead ) ;
// 		}
		
// 		// Closing the file using fclose()
// 		fclose(filePointer) ;
		
// 		printf("Data successfully read from file GfgTest.c\n");
// 		printf("The file is now closed.") ;
// 	}
// 	return 0;		
// }


// C program to Open a File,
// Write in it, And Close the File

# include <stdio.h>
# include <string.h>

int main( )
{

	// Declare the file pointer
	FILE *filePointer ;
	
	// Get the data to be written in file
	char dataToBeWritten[50]
		= "GeeksforGeeks-A Computer Science Portal for Geeks";

	// Open the existing file GfgTest.c using fopen()
	// in write mode using "w" attribute
	filePointer = fopen("GfgTest.txt", "w") ;
	
	// Check if this filePointer is null
	// which maybe if the file does not exist
	if ( filePointer == NULL )
	{
		printf( "GfgTest.c file failed to open." ) ;
	}
	else
	{
		
		printf("The file is now opened.\n") ;
		
		// Write the dataToBeWritten into the file
		if ( strlen ( dataToBeWritten ) > 0 )
		{
			
			// writing in the file using fputs()
			fputs(dataToBeWritten, filePointer) ;
			fputs("\n", filePointer) ;
		}
		
		// Closing the file using fclose()
		fclose(filePointer) ;
		
		printf("Data successfully written in file GfgTest.c\n");
		printf("The file is now closed.") ;
	}
	return 0;		
}