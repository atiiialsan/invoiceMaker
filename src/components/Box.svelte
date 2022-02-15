<script>

	import { Document, Paragraph, Packer, Footer, Table, TableRow, TableCell} from "docx"
	import { saveAs } from "file-saver"


	const table = new Table({
		columnWidths: [3505, 5505],
		rows: [
			new TableRow({
				children: [
					new TableCell({
						children: [new Paragraph("hello")],
					})
				]
			}),
		],
	})
	
	function handleClick(event) {
		event.preventDefault();
		let doc = new Document({
			sections: [
				{
					footers: {
						default: new Footer({
							children: [new Paragraph("Footer text")]
						})
					},
					children: [
						new Paragraph({ text: "Title"}),
						new Paragraph({ text: "Subtitle"}),
						new Paragraph({ text: "Heading 1"}),
						new Paragraph({
							text:
								"Das ist ein cooler test"
						}),
						new Paragraph({text: "Das ist ein Table"}), table 
					],
					
				},
			],
		})
		saveDocumentToFile(doc, "Test.docx");
	}

	function saveDocumentToFile(doc, fileName) {

		const mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

		Packer.toBlob(doc).then((blob) => {
			const docBlob = blob.slice(0, blob.size, mimeType)

			saveAs(docBlob, fileName)
		})

	}


</script>


		<button on:click={handleClick}>Generate Word Document</button>
