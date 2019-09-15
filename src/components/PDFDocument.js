import React from 'react'
import { PDFViewer, Page, Text, View, Document,StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
})

const PDFDocument = (props) => {
  console.log(props)
  return(
    <PDFViewer className="pdf-viewer">
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>
              <h4>{props.NameOfService}</h4>
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )  
}

export default PDFDocument