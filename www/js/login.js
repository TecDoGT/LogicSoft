function ValEntrada ()
{
	//var UCode = $("#tbUserCode").val();
	var UName = $("#tbUserName").val();
	var UPwd  = $("#tbUserPassWord").val();
	
	var NCerrarS = $("#cbSesionPermanete").is(":checked");
	
	if (UName == "" || UPwd == "")
	new Messi('Todos los campos son requeridos.', 
				{
					title: 'Micoope App', 
					titleClass: 'anim error', 
					buttons: 
						[
							{
								id: 0, 
								label: 'Cerrar', 
								val: 'X'
							}
						],
					modal: true,
					width: (window.innerWidth - 25)
				});
	else
	{
		$("#loadingAJAX").show();
		
		$(document).delay(800);
		
		if (UName == "daguila" || UPwd == "123")
		{
			window.sessionStorage.UserLogin = UName;
			
			var Mensage = 'Hola. ' + UName;
				
				new Messi(Mensage, 
				{
					title: 'Micoope App', 
					titleClass: 'success', 
					buttons: 
						[
							{
								id: 0, 
								label: 'Close', 
								val: 'X'
							}
						],
					modal: true,
					width: (window.innerWidth - 25),
					callback: function (info)
					{
						window.location="cuentas.html";
					}
				});
		}
		else
		{
			new Messi('Error al Iniciar Sesi&oacute;n...', 
				{
					title: 'Micoope App', 
					titleClass: 'anim error', 
					buttons: 
						[
							{
								id: 0, 
								label: 'Cerrar', 
								val: 'X'
							}
						],
					modal: true,
					width: (window.innerWidth - 25)
				});
		}
		
		$("#loadingAJAX").hide();

		/*$.post("http://www.tecdogt.com/app/mediadorT.php",
		{
			"action" 	: 'login',
			"user"  	: UName,
			"cod"  		: UCode,
			"pwd"  		: UPwd
		},
		function (data)
		{
			if (data.inicioExito == 1)
			{
				window.sessionStorage.UserLogin = UName;
				window.sessionStorage.UserCode = UCode;
				window.sessionStorage.UserEmpresa = 1;
				
				if (NCerrarS)
				{
					window.localStorage.L_UserLogin = window.sessionStorage.UserLogin;
					window.localStorage.L_UserCode = window.sessionStorage.UserCode;
					window.localStorage.L_UserEmpresa = window.sessionStorage.UserEmpresa;
				}
				
				var Mensage = 'Hola. ' + UName;
				
				new Messi(Mensage, 
				{
					title: 'Micoope App', 
					titleClass: 'success', 
					buttons: 
						[
							{
								id: 0, 
								label: 'Close', 
								val: 'X'
							}
						],
					modal: true,
					width: (window.innerWidth - 25),
					callback: function (info)
					{
						window.location="home.html";
					}
				});
			}
			else
			{
				new Messi('Error al Iniciar Sesi&oacute;n...', 
				{
					title: 'Micoope App', 
					titleClass: 'anim error', 
					buttons: 
						[
							{
								id: 0, 
								label: 'Cerrar', 
								val: 'X'
							}
						],
					modal: true,
					width: (window.innerWidth - 25)
				});
			} 
			
			
			
		},"json");*/
	}
}
