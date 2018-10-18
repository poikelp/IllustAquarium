using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;

public class firebasetest : MonoBehaviour {

	// Use this for initialization

	public Firebase.Storage.FirebaseStorage storage;
	public Firebase.Storage.StorageReference storage_ref;

	void Start () {
		Firebase.FirebaseApp.CheckAndFixDependenciesAsync().ContinueWith(task => {
		  var dependencyStatus = task.Result;
		  if (dependencyStatus == Firebase.DependencyStatus.Available) {
		    // Create and hold a reference to your FirebaseApp, i.e.
		    //   app = Firebase.FirebaseApp.DefaultInstance;
		    // where app is a Firebase.FirebaseApp property of your application class.

		    // Set a flag here indicating that Firebase is ready to use by your
		    // application.
		  } else {
		    UnityEngine.Debug.LogError(System.String.Format(
		      "Could not resolve all Firebase dependencies: {0}", dependencyStatus));
		    // Firebase Unity SDK is not safe to use here.
		  }
		});
	}
	
	// Update is called once per frame
	void Update () {
		if(Input.GetKeyDown(KeyCode.Return) && storage==null){
			GetRefarenceFirebaseStorage();
			return;
		}
		if(Input.GetKeyDown(KeyCode.Return)){
			DownloadImages();
			
		}
	}

	void GetRefarenceFirebaseStorage(){
		storage = Firebase.Storage.FirebaseStorage.DefaultInstance;
		storage_ref = storage.GetReferenceFromUrl("gs://illustaquarim.appspot.com");

	}


	void DownloadImages(){
		Firebase.Storage.StorageReference images_ref = storage_ref.Child("images");
		Firebase.Storage.StorageReference icon_ref = images_ref.Child("c92.PNG");
		// Fetch the download URL
		icon_ref.GetDownloadUrlAsync().ContinueWith((Task<Uri> task) => {
  			if (!task.IsFaulted && !task.IsCanceled) {
    			Debug.Log("Download URL: " + task.Result());
    //			// ... now download the file via WWW or UnityWebRequest.
			}
		});
	}
}
